import React from "react";
import PropTypes from "prop-types";
import "./body-text.scss";

export const BodyText = () => (
  <p className="body-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac sollicitudin
    nisi, a rhoncus risus. Cras at ligula ipsum. Pellentesque varius faucibus
    lacus at tristique. Sed lobortis, metus quis lobortis pretium, odio diam
    mollis est, quis pretium sapien dolor quis magna. Vestibulum quis eros
    libero. Maecenas eu rutrum dui. Maecenas nulla elit, maximus eu ligula id,
    volutpat finibus est. Maecenas egestas ut tellus nec maximus. Ut luctus in
    elit in condimentum. Aenean sit amet tempus tortor. Fusce luctus lobortis
    est in euismod. Vestibulum hendrerit euismod dui et scelerisque.
    Pellentesque ornare volutpat mauris id fringilla. Duis vestibulum augue
    velit, in cursus nisl scelerisque viverra. Nunc vitae est bibendum, tempus
    urna ut, pretium augue.
  </p>
);

// TODO: Fix proptypes.
BodyText.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

BodyText.defaultProps = {
  user: null,
};
