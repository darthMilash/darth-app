import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import Profile from "../../components/profile";


export const ProfileContainer = () => {
    return (
        <ErrorBoundary>
        <Profile
          user={{
            userId: 1,
            name: "Obi van Kenobe",
            bday: "1992-09-01",
            email: "obevan@gmail.com",
            phone: "+380667778866",
          }}
        />
      </ErrorBoundary>
    )
}
