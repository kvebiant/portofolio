function optionText({ text, link }: { text: string; link: string }) {
    return (
      <a href={link}>
        <li className="py-4 text-sm hover:text-black/50">{text}</li>
      </a>
    );
  }

  export default optionText;