import PropTypes from 'prop-types';

export default function AnimatedButton({ children, onClick, ...props }) {
  return (
    <button className="btn" onClick={onClick}
    {
      ...props
    }>
      <span className="btn-bg" />
      <span className="btn-text">{children}</span>
    </button>
  );
}

AnimatedButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  props: PropTypes.object,
};
