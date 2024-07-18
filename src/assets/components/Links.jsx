import PropTypes from 'prop-types'

export default function Links({link, text}) {
  return (
    <li>
      <a
        href={link}
        className="block text-center bg-link-grey-100 rounded-md text-white w-full px-5 py-3"
        target="_blank"
      >
        {text}
      </a>
    </li>
  );
}

Links.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string,
}
