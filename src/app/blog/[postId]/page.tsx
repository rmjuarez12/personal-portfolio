export default function BlogPost({ params }: { params: { postId: string } }) {
  return <div>BlogPost {params.postId}</div>;
}
