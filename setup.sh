#!/bin/bash

# Navigate to the frontend directory and run its setup script
echo "Setting up the frontend..."
if [ -d "frontend" ]; then
    cd frontend
    if [ -f "setup.sh" ]; then
        ./setup.sh
        if [ $? -ne 0 ]; then
            echo "Frontend setup failed. Please check the errors."
            exit 1
        fi
    else
        echo "Setup script for frontend not found."
        exit 1
    fi
    cd ..
else
    echo "Frontend directory does not exist."
    exit 1
fi

# Navigate to the backend directory and run its setup script
echo "Setting up the backend..."
if [ -d "backend" ]; then
    cd backend
    if [ -f "setup.sh" ]; then
        ./setup.sh
        if [ $? -ne 0 ]; then
            echo "Backend setup failed. Please check the errors."
            exit 1
        fi
    else
        echo "Setup script for backend not found."
        exit 1
    fi
    cd ..
else
    echo "Backend directory does not exist."
    exit 1
fi

echo "Setup completed successfully for both frontend and backend."
