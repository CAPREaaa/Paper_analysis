#!/bin/bash

# Function to compare versions
version_gt() { test "$(printf '%s\n' "$@" | sort -V | head -n 1)" != "$1"; }

# Required versions
required_node_version="14"
required_npm_version="6"

# Step 1: Check Node.js version
current_node_version=$(node --version | cut -d'v' -f2)
if version_gt "$required_node_version" "$current_node_version"; then
    echo "Node.js version 14.x or higher is required. Current version is $current_node_version."
    exit 1
else
    echo "Node.js version ($current_node_version) meets the requirement."
fi

# Step 2: Check npm version
current_npm_version=$(npm --version)
if version_gt "$required_npm_version" "$current_npm_version"; then
    echo "npm version 6.x or higher is required. Current version is $current_npm_version."
    exit 1
else
    echo "npm version ($current_npm_version) meets the requirement."
fi

# Step 3: Install dependencies
echo "Installing dependencies..."
npm install

# Step 4: Verify if the installation was successful
if [ $? -eq 0 ]; then
    echo "Dependencies installed successfully."
else
    echo "There was an issue installing the dependencies."
    exit 1
fi

# Step 5: Setup complete

echo "Setup completed. You can now start developing by running 'npm run dev'."
