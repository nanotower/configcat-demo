# ConfigCat Feature Flag Visualization Demo

This is a simple React application that visualizes ConfigCat feature flag behavior in real-time. It demonstrates targeting rules, environment isolation, and real-time flag propagation using the `configcat-react` SDK.

## Setup & Running the Demo

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd configcat-demo
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **ConfigCat Setup:**
    *   Create a free account at [ConfigCat](https://configcat.com/).
    *   Create two environments, e.g., "Environment A" and "Environment B".
    *   Create a feature flag named `demoFeatureFlag` in both environments.
    *   Obtain the SDK Key for both "Environment A" and "Environment B" from your ConfigCat dashboard (Settings -> SDK Keys).

4.  **Update Configuration:**
    *   Open `src/constants/config.js`.
    *   Replace `'your-env-a-sdk-key'` and `'your-env-b-sdk-key'` with your actual SDK keys.

5.  **Run the application:**
    ```bash
    npm run dev
    ```
    The application will open in your browser (usually `http://localhost:5173`).

## Targeting Rules Example (in ConfigCat Dashboard)

The demo generates 80 unique users with the following attributes:

*   **Identifier:** `user_0` to `user_79`
*   **Email:** `user0@example.com` to `user79@example.com`
*   **Custom Attributes:**
    *   `userType`: "A", "B", "C", "D" (20 users each)
    *   `isTestUser`: `true`/`false` (40 users each)
    *   `region`: "US", "EU", "ASIA", "LATAM" (20 users each)
    *   `tier`: "free", "premium", "enterprise" (32, 32, 16 users respectively)

You can use these attributes to create targeting rules in the ConfigCat dashboard. For example:

*   **Enable for specific users:**
    *   `IF Identifier IS ONE OF "user_10"`
    *   `IF Email IS ONE OF "user15@example.com"`
*   **Enable for user groups:**
    *   `IF userType EQUALS "A"`
    *   `IF region IS ONE OF "US", "EU"`
    *   `IF tier EQUALS "premium" AND isTestUser EQUALS "true"`

Remember that targeting rules are evaluated in order. If a user matches an earlier rule, subsequent rules for that user are not evaluated.