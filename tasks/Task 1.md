# Task 1

## Build a Use Case list specifying, with the most formal description possible, the different flows to be tested so they can be used as a reference for testing the app by you or any other QA team member.

### TC01: Login with valid credentials and logout successfully.
### Preconditions: None.
#### Steps:
1. Go to the login page in https://qa-challenge.ensolvers.com/.
2. Enter the correct user and password.
3. Click on 'Sign in' button.
4. Click on the Account icon.
5. Click on 'Sign out'.	
#### **Expected result:** *The user accesses the QA Challenge page. Then the user is logged out successfully.*

### TC02: Folder and to-do items creation.
### Preconditions: Access to https://qa-challenge.ensolvers.com/ and log in with valid credentials.
#### Steps:
1. Click on the "Manage Folders" button.
2. Click on 'Create new Folder' button.
3. Fill the name input with "Folder 1" and click on the "Save" button.
4. Click on the "Ensolvers" title and then click on "Manage To-Do Items" button.
5. Click on "Create new To-Do Item" button.
6. Fill the title and description, and select Folder 1; then clik on the Save button.
7. Repeat steps 6 and 7, but do not select any folder.
#### **Expected result:** *To-Do Items and folder were created.*

### TC03: Folder management (view, edit and delete).
### Preconditions: Access to https://qa-challenge.ensolvers.com/ and log in with valid credentials.
#### Steps:
1. On the folders section, create a new folder with any name.
2. Click the "View" button on the newly created folder.
3. Click on the "Edit" button and modify the name of the folder; then click the Save button.
4. Click on the "Delete" button of the same folder, and click "Delete" on the pop-up window.
#### **Expected result:** *The created folder could be viewed, modified and deleted.*

### TC04: To-Do Items management (view, edit and delete).
### Preconditions: Access to https://qa-challenge.ensolvers.com/ and log in with valid credentials.
#### Steps:
1. On the folders section, create a new folder with any name.
2. Go back to the To-Do Items section, create a new To-Do Item with any name and description, and no folder.
2. Click the "View" button on the recently created To-Do Item.
3. Click on the "Edit" button and modify the name and description of the folder, as well as the folder with the recently created folder; then click the Save button.
4. Click on the "Delete" button of the same To-Do Item, and click "Delete" on the pop-up window.
#### **Expected result:** *The To-Do Items could be viewed, modified and deleted.*

### TC05: Testing on pagination function.
### Preconditions: Access to https://qa-challenge.ensolvers.com/ and log in with valid credentials.
#### Steps:
1. Navigate to the To-Do Items section, then create 22 To-Do Items.
2. Click on the new generated "2" button on the pagination section.
3. Click on the "<" button on the left of the "1" button on the pagination section.
#### **Expected result:** *A pagination was created and can be navigated on.*

### TC06: Sorting with different filters on To-Do Items section.
### Preconditions: Access to https://qa-challenge.ensolvers.com/ and log in with valid credentials.
#### Steps:
1. Navigate to the To-Do Items section, then create 3 To-Do Items with titles `A, B, C`, descriptions `D3, D1, D2`, respectively, and no folders.
2. Click on the "ID" column heading to sort items by ID.
3. Click on the "Title" column heading to sort items title.
4. Click on the "Description" column heading to sort items by description.
#### **Expected result:** *On every column heading click, items were sorted accordingly.*