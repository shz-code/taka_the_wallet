# Taka - The Wallet

Taka - The Wallet is a React Native application that allows users to manage different accounts and keep track of transactions for each account. With Taka, users can easily monitor their financial activities and maintain a record of their transactions.

## Features

- Account Management: Create, view, edit, and delete multiple accounts.
- Transaction Tracking: Record transactions for each account, including income and expenses.
- Transaction History: View a history of transactions for each account, including details such as date, amount, and category.
- Categorization: Categorize transactions into different categories for better organization and analysis.
- Balance Calculation: Automatically calculate and display the balance for each account based on the recorded transactions.
- Data Security: Secure user data with authentication and implement data encryption for sensitive information.

## Installation

- Clone the repository:

```bash
git clone https://github.com/shz-code/taka_the_wallet
```

- Install dependencies:

```bash
cd taka-wallet
npm install
```

- Set up Firebase project and enable Firebase Email Authentication and Realtime Database.
  - Create a new Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com).
  - Enable Firebase Email Authentication and configure it for your project.
  - Enable Firebase Realtime Database and set up the necessary rules.
- See .env.examle file for the environment variables.
- Start the development server:

```bash
npm start
```

- Follow the instructions provided by the development server to run the app on a physical device or emulator.

## Technologies Used

- **React Native**: A JavaScript framework for building cross-platform mobile applications.
- **Redux**: A state management library for managing application state.
- **React Navigation**: A routing and navigation library for React Native applications.
- **Firebase Realtime Database**: A NoSQL database for storing account and transaction data.
- **Firebase Email Authentication**: Authentication service for user registration and login.

## Usage

- Create a new account by providing the necessary details such as account name, currency, and initial balance.
- Start recording transactions by adding income or expense entries for each account.
- View the transaction history for each account to track your financial activities.
- Analyze your financial status by checking the account balances and transaction history.

## Contributing

Contributions to Taka - The Wallet are welcome! If you find any bugs or would like to suggest new features, please open an issue or submit a pull request.

When contributing, please adhere to the following guidelines:

- Fork the repository and create a new branch for your feature or bug fix.
- Follow the existing coding style and conventions.
- Provide clear and detailed commit messages.
- Write tests for any new functionality and ensure existing tests pass.

## License

Taka - The Wallet is open source and released under the [MIT License](https://opensource.org/licenses/MIT).

## Contact

If you have any questions or suggestions, feel free to contact the development team at web.shahidul.alam@gmail.com.

Happy managing and tracking your accounts with `Taka - The Wallet`!
