import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Hero() {
  return (
    <section>
      <p>Hello, I'm</p>

      <h1>Rafael</h1>

      <h2>Software Engineer</h2>

      <p>I build websites and web applications.</p>

      <Stack direction="column" spacing={2}>
        <Button variant="contained">View Projects</Button>

        <Button variant="outlined">Contact Me</Button>
      </Stack>
    </section>
  );
}

export default Hero;
