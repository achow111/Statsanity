import os

def create_folder(folder_name):
    try:

        # Check if the folder already exists
        if not os.path.exists(folder_name):
            
            # Create the folder
            os.makedirs(folder_name)
            
    except Exception as e:
        print(f"Error: {e}")