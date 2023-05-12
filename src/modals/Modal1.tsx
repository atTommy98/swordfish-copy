interface IProps {
  continue360Video: () => void;
}

export default function Modal1({ continue360Video }: IProps) {
  return (
    <div className="modal1">
      <p>
        Welcome to the Himalayas – the highest region on Earth. This is an
        interactive experience, so move the iPad to explore the mountain
        scenery.
      </p>
      <button onClick={continue360Video}>Continue</button>
    </div>
  );
}
