export async function getStaticPaths() {
  const response = await fetch("http://localhost:5000/experiences");

  const experiences = response.data;
  console.log(experiences);

  const paths = experiences.map((experience) => ({
    params: { id: experience.id.tostring() },
  }));

  return {
    paths,
    fallback: false,
  };
}
