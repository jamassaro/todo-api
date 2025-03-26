const express = require("express");
const { default: supabase } = require("../../../services/supabase-client");
const router = express.Router();

router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  const response = await supabase
  .from('tasks')
  .select('*')
  .eq('user_id', userId)
  .order('created_at', { ascending: false })

  if (response.error) {
    res.status(500).json({ error: response.error.message });
  } else {
    res.status(200).json(response.data);
  }
});


router.post("/", async (req, res) => {
  const task = req.body;
  const response = await supabase.from('tasks').insert(task).select();

  if (response.error) {
    res.status(500).json({ error: response.error.message });
  } else {
    res.status(201).json(response.data);
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const task = req.body;
  const response = await supabase.from('tasks').update(task).eq('id', id).select();
  if (response.error) {
    res.status(500).json({ error: response.error.message });
  } else {
    res.status(200).json(response.data);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const response = await supabase.from('tasks').delete().eq('id', id);
  if (response.error) {
    res.status(500).json({ error: response.error.message });
  } else {
    res.status(200).json({ message: 'Task deleted successfully' });
  }
});

module.exports = router;