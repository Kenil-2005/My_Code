# creating dummy dictionary 
def generate_dummy_dict(num_keys):
    dummy_data = {} 

    for i in range(1, num_keys + 1): 
        key = f"key_{i}"
        value = f"value_{i}"
        dummy_data[key] = value
    return dummy_data 

# use loop for continuty for the user
if __name__ == "__main__":
    while True:
        # try use for the input error if the input is not integer 
        try:
            num_keys_input = input("Enter the number of keys for the dummy dictionary: ")
            num_keys = int(num_keys_input)
            if num_keys < 0:
                print("Please enter a non-negative number of keys.")
                continue
            break
        except ValueError:
            print("Invalid input. Please enter an integer.")

    dummy_dictionary = generate_dummy_dict(num_keys)
    print("Generated Dummy Dictionary:")
    print(dummy_dictionary)