**Project Name:** User Directory

**Live Demo:** Browse the URL **https://birthare.github.io/evolent-health/** to see the application in behaviour.

**Description:** This portal has been designed and developed exclusively as a tailor-made solution for Evolent Health International Pvt. Ltd. This covers an end-to-end flow and scenarios of the data for the set of users.

This is a fully-adaptive and **100% responsive application** and optimally supported by any of the trending and legacy device types (e. g. Large desktops, Tablets, Mobile Phones etc.). **Please refer below snapshot for the entire web view** (Take a look at some of more responsive snapshots at the bottom of this document for views from multiple device types.):

![DesktopView](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/FullView/DesktopView.jpg)

**Expectations:**
   - To populate the list of existing users (along with applicable datasets as First Name, Last Name, Email, Phone, Active State
   - Add a new user to the system.
   - Update the data for an existing user
   - Activate/Deactivate functions

**Technologies used:**
   - **Environment:** npm 6.14.12
   - **Building blocks:** Angular CLI 11.2.12
   - **Front end Frameworks:** Bootstrap 5, Angular Material
   - **Markup:** HTML 5
   - **Styling:** CSS
   - **Data Operations:** REST APIs to be consumed for operating with the data
   
 **Codebase Sructure:**
 

    .
    ├── git         	# Contains information for version control and commits
    ├── dist               # Contains the minimized version of the source code
    ├── e2e                # Runs end-to-end tests using Protractor
    ├── node_modules       # Installed packages get stored here
    ├── .gitignore		# Used for exporting files/folders to/from git repository
    ├── karma.conf.js	# Helps testing tools to define the framework and environment to test
    ├── package.json	# Consists package information installed for application
    ├── karma.conf.js	# Helps testing tools to define the framework and environment to test
    ├── tsconfig.json	# Helps root level files to compile the TypeScript code 
    ├── run.cmd		    # To run the angular application
    └── README.md          # Consists the features and flow of application and can be used to generate HTML summary out of it

**NOTE:** I would like to let you know on below 2 highlights:
- That post deployment, I have observed the relative file path mismatch because of which 2 attachments are failing to load under run time application (Problem Statement PDF and one thumbnail image in the footer copyright).
- Currently I have mocked the rest APIs in the form of real JSON and consuming them as per the expected service call formats only. Only the POST call related features (Adding of new user, update to them, activate/deactivate) will not be accessible on the application right now. However the flow can be experienced on the user interface.

**User Experience Coverage**
- **Header Navigation**

    For ease of access, I have considered Header to be responsible for the mostly used navigation paths across the application:
    
    ![Header](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/Header.JPG)

   - Overview
   - Features
   - Problem Statement
   - User Directory
   - User Actions
   - Add User
   - Update User
   - Activate User
   - Deactivate User
   - Global Search (Disabled for now)


- **Targeted Content**

    This block is divided in three major sections as following:

    ![TagetedContent](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/TargetedContent(Middle).png)

   1. **Project Description:** This section explains the need of this application along with its features
      
      ![ProjectDescription](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/ProjectDescription.JPG)
      
   3. **Features:** Enables users to look at their most frequent questions and their appropriate solutions
   
      ![Features](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/Features.JPG)
      
   4. **User Directory:**
      
        ![UserDirectory](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/UserDirectory.JPG)
        
      - **Problem Statement:** Click event of this button will be opening up the PDF in a dialog box containing the problem statement shared by Evolent HR team. This is just an additional component to help the evaluator with assessing the solutions to the project challenge. (This is currently failing to load due to relative file path mismatch)
      
        ![ProblemStatement](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/ProblemStatement.JPG)
        
      - **Functionalities (User Directory Grid):** This is an accordion based component and will be collapsed as default. Users can expand it to see the functionalities being covered as a part of the user directory grid below this accordion.
      
        ![FunctionalitiesUserDirectoryGrid](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/FunctionalitiesUserDirectoryGrid.JPG)
      - **Filtering:** Filters the user records as per the search criteria.
      
        ![Filtering](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/Filtering.JPG)
        
        - Filtering with **no search results** returned
        
        ![InvalidSearch](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/InvalidSearch.JPG)
        
      - **Sorting:** A client-side sorting for the applicable column sets
      
        ![Sorting](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/Sorting.JPG)
        
      - **Pagination:** A client-side pagination incorporated with the page size of 5, 10 and 20.
      
        ![Pagination](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/Pagination.JPG)
        
      - **Sticky (Pinned) column:** Enabled the column **First Name** and **Last Name** as sticky. This feature helps the users to scroll the grid content horizontally keeping the primary information needed columns sticky when the grid has more number of columns that cannot be displayed appropriately.
      
        ![PinnedColumn](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/PinnedColumn.JPG)

        **Note:** Since we have less number of columns currently being displayed in the grid hence **Sticky (Pinned) column** feature cannot directly be experienced on desktop devices however can be experienced either **on the handheld devices (i.e. Tablets, Mobile Phones)** or even with **resizing the browser window on the desktops**.

      - **Search User:** A client side filter has been implemented for achieving this feature which is capable of filtering the records as per user's search requests at run time.
        ![SearchUser](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/SearchUser.JPG)
      - **Add New User:** On click of this button, a UI form will be displayed wherein user needs to fill the bare minimum information (i. e. First Name, Last Name, Email, Phone and Active Status) and submit the request for creating an user's record in the system. I have incorporated an interesting feature where one can create new users even with keeping them deactivated initially, however they can again be made active at a later point in time. Once the user is added, the record for this user can be seen in the User Directory grid.
      
      ![AddNewUser](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/AddNewUser.JPG)
      
      - **Add New User Form Submission**
      
      ![AddNewUserForm](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/AddNewUserForm.JPG)
      - **User Directory Table:** This table populates the list of of all the existing users available in the system along with their applicable column names as below:
        ![UserDirectoryGrid](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/UserDirectoryGrid.JPG)
        - First Name
        - Last Name
        - Gender
        - Email
        - Phone
        - Is User Active (Read-only checkbox)
        - Actions

        **Note:** Records of the existing users can anytime be updated with an applicable set of fields using the Edit feature in the table-row itself. User's state can also be switched to Activated/Deactivated using **Activate**/**Deactivate** controls by means of an extra added confirmation layer.
        
        **Edit User Flow:**
        
        ![EditUser](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/EditUser.JPG)
        
        **Activate User Flow:**
        
        ![ActivateUser](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/ActivateUser.JPG)
        
        **Deactivate User Flow:**
        
        ![DeactivateUser](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/DeactivateUser.JPG)


- **Footer:** Footer section has been introduced with incorporating the empty redirecting URLs along with social media iconography. This has been provided with a newsletter subscription form however the functionality is not yet implemented.
- 
  ![Footer](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/Footer.JPG)
  
  -----------------------------------------------------------------------------------------------------------------------------------------------
  
  -----------------------------------------------------------------------------------------------------------------------------------------------
  
  -------------------------------------------------- **Snapshots for multiple device types:** ---------------------------------------------------
  
  -----------------------------------------------------------------------------------------------------------------------------------------------
  
  Take a look at some of the snapshots as below for multiple device types:
  
  **Tablet View:**
  
  ![TabletView](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/FullView/TabletView.jpg)

  **Tablet Header Navigation:**
  
  ![TabletHeaderNavigation](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/FullView/TabletHeaderNavigation.jpg)

  **Tablet Pinned Columns:**
  
  ![TabletPinnedColumns](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/FullView/TabletPinnedColumns.jpg)

  **Mobile View:**
  
  ![MobileView](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/FullView/MobileView.jpg)

  **Mobile Header Navigation:**
  
  ![MobileHeaderNavigation](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/FullView/MobileHeaderNavigation.jpg)

  **Extra Small Device View:**
  
  ![ExtraSmallDeviceView](https://raw.githubusercontent.com/Birthare/evolent-health/master/src/assets/images-document/FullView/ExtraSmallDeviceView.jpg)
