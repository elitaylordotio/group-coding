
# Question:
# Reversing strings (reading them from right to left, rather than from left to right) is a surprisingly common task in programming.

# For example, in bioinformatics, reversing the sequence of DNA or RNA strings is often important for various analyses, such as finding complementary strands or identifying palindromic sequences that have biological significance.

# Your task is to reverse a given string.

# Some examples:

#     Turn "stressed" into "desserts".
#     Turn "strops" into "sports".
#     Turn "racecar" into "racecar".
# */

# /*
# Answer:
# I could just iterate backwards through the string but I think I can use recursion

def reverseString(string):
    if string == '':
        return ''
    return reverseString(string[1:]) + string[0]