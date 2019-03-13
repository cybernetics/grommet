function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { describe, PropTypes } from 'react-desc';
import { getAvailableAtBadge, themeDocUtils } from '../../utils';
export var doc = function doc(TextArea) {
  var DocumentedTextArea = describe(TextArea).availableAt(getAvailableAtBadge('TextArea')).description('A control to input multiple lines of text.').usage("import { TextArea } from 'grommet';\n<TextArea id='item' name='item' />").intrinsicElement('textarea');
  DocumentedTextArea.propTypes = {
    id: PropTypes.string.description('The id attribute of the textarea.'),
    fill: PropTypes.bool.description('Whether the width and height should fill the container.').defaultValue(false),
    focusIndicator: PropTypes.bool.description('Whether the plain textarea should receive a focus outline.'),
    name: PropTypes.string.description('The name attribute of the textarea.'),
    onChange: PropTypes.func.description('Function that will be called when the user types in the textarea.'),
    placeholder: PropTypes.string.description('Placeholder text to use when no value is provided.'),
    plain: PropTypes.bool.description("Whether this is a plain textarea with no border or padding.\nOnly use this when the containing context provides sufficient affordance."),
    value: PropTypes.string.description('What text to put in the textarea.'),
    resize: PropTypes.oneOfType([PropTypes.oneOf(['vertical', 'horizontal']), PropTypes.bool]).description('Whether user is allowed to resize the textarea.').defaultValue(true)
  };
  return DocumentedTextArea;
};
export var themeDoc = _extends({
  'textArea.extend': {
    description: 'Any additional style for Text.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'textArea.disabled.opacity': {
    description: 'The opacity when the textArea is disabled.',
    type: 'number',
    defaultValue: 0.3
  },
  'global.control.border': {
    description: 'The border of the textarea.',
    type: 'object',
    defaultValue: {
      width: '1px',
      radius: '4px',
      color: 'border'
    }
  },
  'global.colors.border': {
    description: 'The color of the borders',
    type: 'object',
    defaultValue: {
      dark: 'rgba(255, 255, 255, 0.33)',
      light: 'rgba(0, 0, 0, 0.33)'
    }
  }
}, themeDocUtils.focusStyle, themeDocUtils.placeholderStyle, themeDocUtils.inputStyle, themeDocUtils.disabledStyle);