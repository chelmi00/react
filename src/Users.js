const Users = (props) => {
    return (
        <div>
            {props.users.map((user, index) => {
                return (
                    <p key={index}>
                        {user.name}
                        <button onClick={() => props.removeUser(index)}>Remove</button>
                    </p>
                );
            })}
            <button onClick={() => props.showAll()}>Show All</button>
        </div>
    );
}


export default Users;