interface Article {
  id: number;
  isPublished: boolean;
  isLiked: boolean;
  title: string;
  content: string;
  image: string;
  createdAt: Date;
  likeCount: number;
  categoryName: string;
}
