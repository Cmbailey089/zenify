import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_PROFILE_PICTURE, QUERY_ME } from '../../utils/queries';

const UpdatePfp = () => {
  const [imageUrl, setImageUrl] = useState('');
  const history = useHistory();

  const { data } = useQuery(QUERY_ME);
  const { me } = data || {}; // Destructure the 'me' object from data
  const { profilePictureUrl } = me || {}; // Get the 'profilePictureUrl' field from 'me' object
  const [updateProfilePicture] = useMutation(UPDATE_PROFILE_PICTURE);

  const handleInputChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Update the profile picture URL in the user's profile
      await updateProfilePicture({
        variables: {
          imageUrl: imageUrl,
        },
      });

      console.log('UpdatePfp - Profile picture updated successfully');

      // Redirect to a different page (e.g., profile page)
      history.push('/profile');
    } catch (error) {
      console.log('UpdatePfp - Error updating profile picture:', error);
      // Handle the error, e.g., display an error message
    }
  };

  return (
    <div>
      <h1>Update Profile Picture</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Image URL:
          <input type="text" value={profilePictureUrl || ''} onChange={handleInputChange} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UpdatePfp;

