import sys

_dir = './src/app'
component_dir = f"{_dir}/popup-modal"

file_paths = [f"{_dir}/app.component.html", f"{_dir}/app.component.ts", f"{_dir}/app.module.ts"]
file_paths += [f"{component_dir}/popup-modal.component.html", f"{component_dir}/popup-modal.component.ts"]

print(file_paths)
# sys.exit()

# Loop through the list of files
for file_path in file_paths:
    try:
        # Open the file for reading
        with open(file_path, 'r') as file:
            # Read the contents of the file
            file_contents = file.read()
            # Print the contents
            print(f"\n{file_path} ==>")
            print(file_contents)
            print("\n")
    except FileNotFoundError:
        print(f"File not found: {file_path}")
    except IOError as e:
        print(f"Error reading {file_path}: {str(e)}")