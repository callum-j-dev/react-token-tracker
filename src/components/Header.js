import Button from './Button';

const Header = ({ title }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <nav>
            <ul>
                <li>
                    <Button text='Untap All' color="purple" />
                </li>
                <li>
                    <Button text="Clear All" color="green" />
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header