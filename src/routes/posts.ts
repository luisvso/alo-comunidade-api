import { Router } from "express";
import { mockPosts } from "../mocks/posts";

const router = Router();

router.get("/", (_req, res) => {
  res.json(mockPosts);
});

router.get("/:id", (req, res) => {
  const post = mockPosts.find((p) => p.id === Number(req.params.id));
  if (!post) {
    res.status(404).json({ error: "Post não encontrado" });
    return;
  }
  res.json(post);
});

export default router;
