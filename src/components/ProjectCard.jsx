export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="overflow-hidden rounded-2xl cursor-pointer"
    >
      <img
        src={project.image}
        alt="Poster Design"
        className="w-full aspect-[4/5] object-cover transition duration-500 hover:scale-105"
      />
    </div>
  );
}