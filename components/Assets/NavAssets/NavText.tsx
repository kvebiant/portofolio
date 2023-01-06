function navText({ text, link }: { text: string; link: string }) {
  return (
    <a href={link} className=" ml-10 text-l uppercase hover:text-black/50">
      {text}
    </a>
  );
}

export default navText;