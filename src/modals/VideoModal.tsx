interface IProps {
  continue360Video: () => void;
  videoSrc: any;
}

export default function VideoModal({ continue360Video, videoSrc }: IProps) {
  return (
    <div className="modal-video">
      <video controls autoPlay >
        <source src={videoSrc} />
      </video>
      <button onClick={continue360Video}>Continue</button>
    </div>
  );
}
