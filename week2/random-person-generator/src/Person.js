import React from 'react';

const Person = ({ person }) => {
  if (!person) {
    return null;
  }

  const { first, last } = person.name;
  const email = person.email;

  return (
    <div>
      <ul class="list-group mt-4">
        <li class="list-group-item list-group-item-primary mx-auto w-50">
          First name: {first}
        </li>
        <li class="list-group-item list-group-item-secondary mx-auto w-50">
          Last name: {last}
        </li>
        <li class="list-group-item list-group-item-success mx-auto w-50">
          Email: {email}
        </li>
      </ul>
    </div>
  );
};

export default Person;
