import { h } from 'preact';

function SvgComponent(props) {
  return (
    <svg width={24} height={24} viewBox="0 -4 24 32" {...props}>
      <path d="M12 12.713L.015 3h23.97L12 12.713zm0 2.574L0 5.562V21h24V5.562l-12 9.725z" />
    </svg>
  );
}

export default SvgComponent;
