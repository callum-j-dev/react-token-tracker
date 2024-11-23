import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onClearAll, onUntapAll, onAdd, showAdd }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <div className="container">
            <Button text='Untap All' color="purple" textColor="lightgray" buttonType="adjust-all" onClick={onUntapAll} />
            <Button text="Clear All" color="teal" textColor="lightgray" buttonType="adjust-all" onClick={onClearAll} />
            <Button  text={showAdd ? 'Close' : 'Add'} color={showAdd ? 'red' : 'green'} textColor="lightgray" buttonType="add-new" onClick={onAdd} />
        </div>
        
    </header>
  )
}

Header.defaultProps = {
    title: 'Token Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header