// components/BlogContent.jsx
export default function BlogContent({ content }) {
    return (
      <div className="prose max-w-none">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    );
  }