import React from 'react';

export const ContactCard = (props) => {
    const{id,name,email} = props.contact
    return (<div>

        <div className='item'>
            <div className='content'>
                <div className='header'>{name}</div>
                <div>{email}</div>

            </div>
            <i className='trash alternate outline icon' style={{color:'red',marginTop:'7px'}}></i>
            {/* <div>{contact.id} </div> */}



        </div>

    </div>);
};
