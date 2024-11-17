import Token from './Token';

const Tokens = ({ tokens, onUntap, onTap, onAdd, onRemove }) => {




    return (
        <div className="container tokens">
            {tokens.map((token, index) => (
                <Token key={index} token={token} onUntap={onUntap} onTap={onTap} onAdd={onAdd} onRemove={onRemove} />
            ))}
        </div>
    )
}

export default Tokens