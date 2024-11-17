import Button from './Button';

const Header = ({ title, onClearAll, onUntapAll }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <div className="container">
            <Button text='Untap All' color="purple" textColor="lightgray" buttonType="adjust-all" onClick={onUntapAll} />
            <Button text="Clear All" color="green" textColor="lightgray" buttonType="adjust-all" onClick={onClearAll} />
        </div>
        
    </header>
  )
}

export default Header