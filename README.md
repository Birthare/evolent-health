**Project Name:** User Directory

**Live Demo:** Browse the URL <ToBeHostedUrl> to see the application in
behaviour.

**Description:** This portal has been designed and developed exclusively as a tailor-made solution for evolent health international private limited. This covers an end to end flow and scenarios of the data for the set of users.

This is a fully-adaptive and **100% responsive application** and optimally suppoerted by any of the trending and legacy device types (e.g. Large desktops, Tablets, Mobile Phones etc.).

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

**User Experience Coverage**
- **Header Navigation**

    For ease of access, I have considered Header to be responsible for the mostly used navigation paths across the application:

   - Overview
   - Features
   - Problem Statement
   - User Directory
   - User Actions
   - Add User
   - Update User
   - Activate User
   - Deactivate User
   - Global Search ( Disabled for now)


- **Targeted Content**

    This block is divided in three major sections as following:


   1. **Project Description:** This section explains the need of this application along with its features
   2. **Features:** Enables users to look at their most frequent questions and and their appropriate solutions
   3. **User Directory:**
      - **Problem Statement:** Click event of this button will be opening up the PDF in a dialog box containing the problem statement shared by Evolent HR team. This is just an additional component to help the evaluator with assessing the solutions to the project challenge.
      - **Functionalities (User Directory Grid):** This is an accordion based component and will be collapsed as default. Users can expand it to see the functionalities being covered as a part of the user directory grid below this accordion.
        - **Filtering:** Filters the user records as per the search criteria.
        - **Sorting:** A client side sorting for the applicable column sets
        - **Pagination:** A client side pagination incorporated with the page size of 5, 10 and 20.
        - **Sticky (Pinned) column:** Enabled the column **First Name** and **Last Name** as sticky. This feature helps the users to scroll the grid content horizontally keeping the primary information needed columns sticky when the grid has more number of columns that cannot be displayed appropriately.
        
            **Note:** Since we have less number of columns currently being displayed in the grid hence **Sticky (Pinned) column** feature cannot directly be experienced on desktop devices however can be experienced either **on the handheld devices (i.e. Tablets, Mobile Phones)** or even with **resizing the browser window on the desktops**.
        
      - **Search User:** A client side filter has been implemented for achieving this feature which is capable of filtering the records as per user's search requests at run time.
      - **Add New User:** On click of this button, a UI form will be displayed wherein user needs to to fill the bare minimum information (i.e. First Name, Last Name, Email, Phone and Active Status) and submit the request for creating an user's record in the system. I have incorporated an interesting feature where one can create new users even with keeping them deactivated initially, however they can again be made active at a later point in time. Once the user is added, the record for this user can be seen in the User Directory grid.
      - **User Directory Table:** This table populates the list of of all the existing users available in the system along with their applicable column names as below:

        - First Name
        - Last Name
        - Gender
        - Email
        - Phone
        - Is User Active (Read-only checkbox)
        - Actions

        **Note:** Records of the existing users can anytime be updated with an applicable set of fields using the Edit feature in the table-row itself. User's state can also be switched to Activated/Deactivated using **Activate**/**Deactivate** controls by means of an extra added confirmation layer.


- **Footer:** Footer section has been introduced with incorporating the empty redirecting URLs along with social media iconography. This has been provided with a newsletter subscription form however the functionality is not yet implemented.
