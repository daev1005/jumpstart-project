import React from 'react';
import Avatar from '@mui/material/Avatar';

interface HeaderProps {
  firstName: string;
  lastName: string;
  title?: string;
}

// helper function to get initials from first and last name
const getInitials = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
};

const Header: React.FC<HeaderProps> = ({ firstName, lastName, title }) => {
  const initials = getInitials(firstName, lastName);
  const fullName = `${firstName} ${lastName}`;
  // if title is provided, use it, otherwise use full name
  const displayTitle = title ? title : fullName;
  return (
    <div className="w-full mb-2">
      <div className="flex items-center gap-4 px-6 py-4">
        {/* Initials */}
        <Avatar
          sx={{
            width: 40,
            height: 40,
            backgroundColor: '#D0D0D0',
            fontSize: '0.875rem',
            fontWeight: 500,
          }}
        >
          {initials}
        </Avatar>
        {/* Display Name */}
        <h1 className="text-2xl font-medium text-gray-900">{displayTitle}</h1>
      </div>

      {/* Separator Line */}
      <div className="w-full h-px" style={{ backgroundColor: '#D9D9D9' }}></div>
    </div>
  );
};

export default Header;
