import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthContext } from './components/auth-context';
import Home from './components/Home';

describe('Home', () => {
  it('displays the sign up and onboarding buttons when the user is not logged in', () => {
    render(
      <AuthContext.Provider value={{ isLoggedIn: false }}>
        <Home />
      </AuthContext.Provider>
    );

    const signUpButton = screen.getByRole('button', { name: 'Get flying to adventure!' });
    expect(signUpButton).toBeInTheDocument();

    const onboardingButton = screen.getByRole('button', { name: 'Finish Verifying ID!' });
    expect(onboardingButton).toBeInTheDocument();
  });

  it('displays the profile button when the user is logged in', () => {
    render(
      <AuthContext.Provider value={{ isLoggedIn: true }}>
        <Home />
      </AuthContext.Provider>
    );

    const profileButton = screen.getByRole('button', { name: 'Your Profile' });
    expect(profileButton).toBeInTheDocument();
  });

  it('navigates to the sign up page when the sign up button is clicked', () => {
    const navigate = jest.fn();

    render(
      <AuthContext.Provider value={{ isLoggedIn: false }}>
        <Home />
      </AuthContext.Provider>
    );

    const signUpButton = screen.getByRole('button', { name: 'Get flying to adventure!' });
    userEvent.click(signUpButton);

    expect(navigate).toHaveBeenCalledWith('/signup');
  });

  it('navigates to the onboarding page when the onboarding button is clicked', () => {
    const navigate = jest.fn();

    render(
      <AuthContext.Provider value={{ isLoggedIn: false }}>
        <Home />
      </AuthContext.Provider>
    );

    const onboardingButton = screen.getByRole('button', { name: 'Finish Verifying ID!' });
    userEvent.click(onboardingButton);

    expect(navigate).toHaveBeenCalledWith('/onboarding');
  });

  it('navigates to the profile page when the profile button is clicked', () => {
    const navigate = jest.fn();

    render(
      <AuthContext.Provider value={{ isLoggedIn: true }}>
        <Home />
      </AuthContext.Provider>
    );

    const profileButton = screen.getByRole('button', { name: 'Your Profile' });
    userEvent.click(profileButton);

    expect(navigate).toHaveBeenCalledWith('/profile');
  });
});
