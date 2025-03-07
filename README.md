# sale-project

## Project Structure

#### Root Level
- **README.md**: Documentation file for the project.
- **back-end/**: Contains the backend code and related files.
- **front-end/**: Contains the frontend code and related files.

#### Back-end Folder
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **server-solution.sln**: Solution file for the backend project.
- **ApiServices/**: Contains the main API service project.
  - **ApiServices.csproj**: Project file for the API services.
  - **ApiServices.http**: HTTP request file for testing APIs.
  - **appsettings.Development.json**: Development-specific settings.
  - **appsettings.json**: General settings for the application.
  - **Program.cs**: Entry point for the application.
  - **WeatherForecast.cs**: Example model class.
  - **bin/**: Output directory for compiled binaries.
  - **Controllers/**: Contains API controllers.
  - **obj/**: Intermediate files directory.
  - **Properties/**: Contains project properties.
- **BusinessObject/**: Contains business logic classes.
  - **BusinessObject.csproj**: Project file for business objects.
  - **Class1.cs**: Example class.
  - **obj/**: Intermediate files directory.
- **DataAccess/**: Contains data access classes.
  - **Class1.cs**: Example class.
- **Repository/**: Contains repository classes.
- **UnitTest/**: Contains unit tests.

#### Front-end Folder
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **eslint.config.mjs**: ESLint configuration file.
- **next-env.d.ts**: TypeScript declaration file for Next.js.
- **next.config.ts**: Configuration file for Next.js.
- **package.json**: Contains metadata and dependencies for the project.
- **README.md**: Documentation file for the frontend project.
- **tsconfig.json**: TypeScript configuration file.
- **.next/**: Output directory for Next.js build files.
- **public/**: Contains static files like images and icons.
- **src/**: Contains the main source code for the frontend.

## Front-end

### `package.json`

The `package.json` file is a JSON file that contains metadata about the project, including its dependencies and scripts.

#### Metadata
- `"name"`: The name of the project (`"front-end"`).
- `"version"`: The version of the project (`"0.1.0"`).
- `"private"`: Indicates that the project is private and should not be published (`true`).

#### Scripts
- `"dev"`: Command to start the development server (`"next dev"`).
- `"build"`: Command to build the project for production (`"next build"`).
- `"start"`: Command to start the production server (`"next start"`).
- `"lint"`: Command to run the linter (`"next lint"`).

#### Dependencies
- `"react"`: React library (`"^19.0.0"`).
- `"react-dom"`: React DOM library (`"^19.0.0"`).
- `"next"`: Next.js framework (`"15.2.1"`).

#### DevDependencies
- `"typescript"`: TypeScript compiler (`"^5"`).
- `"@types/node"`: Type definitions for Node.js (`"^20"`).
- `"@types/react"`: Type definitions for React (`"^19"`).
- `"@types/react-dom"`: Type definitions for React DOM (`"^19"`).
- `"eslint"`: ESLint linter (`"^9"`).
- `"eslint-config-next"`: ESLint configuration for Next.js (`"15.2.1"`).
- `"@eslint/eslintrc"`: ESLint configuration library (`"^3"`).

## Back-end

### `ApiServices.GlobalUsings.g.cs`

This file contains global using directives for the API services project. It is auto-generated and includes common namespaces used throughout the project.

### `ApiServices.AssemblyInfo.cs`

This file contains assembly-level attributes for the API services project. It is auto-generated and includes metadata such as the company name, product name, and version information.

## Getting Started

### Front-end

1. Install dependencies:
   ```sh
   cd front-end
   npm install
   ```

2. Run the development server:
   ```sh
   npm run dev
   ```

3. Build the project for production:
   ```sh
   npm run build
   ```

4. Start the production server:
   ```sh
   npm start
   ```

### Back-end

1. Open the solution file (`server-solution.sln`) in Visual Studio.
2. Build the solution.
3. Run the API services project:
   ```sh
   cd back-end/ApiServices
   dotnet run
   ```

### Entity Framework Commands

1. Add a new migration:
   ```sh
   cd back-end/ApiServices
   dotnet ef migrations add <MigrationName>
   ```

2. Update the database:
   ```sh
   cd back-end/ApiServices
   dotnet ef database update
   ```

3. Drop the database:
   ```sh
   cd back-end/ApiServices
   dotnet ef database drop
   ```

4. Remove the last migration:
   ```sh
   cd back-end/ApiServices
   dotnet ef migrations remove
   ```

## License

This project is licensed under the MIT License.