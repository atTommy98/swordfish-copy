interface IProps {
  continueVideo: () => void;
}

export default function Modal1({ continueVideo }: IProps) {
  return (
    <div className="modal1">
      <p>
        Welcome to the Himalayas – the highest region on Earth. This is an
        interactive experience, so move the iPad to explore the mountain
        scenery.
      </p>
      <button onClick={continueVideo}>Continue</button>
    </div>
  );
}
