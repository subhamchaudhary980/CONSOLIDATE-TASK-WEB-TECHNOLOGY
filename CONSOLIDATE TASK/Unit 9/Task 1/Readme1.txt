Unit 9: Setting Up Private Areas and User Registration in Web Development

(1) Flawed User Registration Form — Student Analysis
Question 1: Identifying Problems (5 problems)

No privacy policy in sight, plus missing the consent checkbox.

Gender uses checkboxes (user can select more than one; should be radio buttons).

A security question like "favourite colour" feels too basic, almost predictable. Guessing it might even work.

No confirm password field (users can type wrong password).

No clear validation rules (password strength, age limits, email format not explained).

Question 2: Password Security
a) Why is the password system weak?

Password rules allow weak or basic choices.

No confirm password to prevent mistakes.

A shaky security question opens doors during account recovery, leaving systems exposed.

b) Two rules to make passwords more secure

Less than ten characters please.

Got to add letters both big and small plus a digit somehow tied to a mark like this one.

Question 3: Validation
a) What is validation?

Checking what users send makes sure it fits, makes sense, and won’t cause harm when allowed through.

b) Two examples of validation for this form

A single part needs to match the expected structure - like an address in the pattern of example@domain.com
).

A person's age should appear as a number between 13 and 120.

Question 4: Privacy and Consent
What's missing in privacy protection here?

A Privacy Policy link shows up along with a checkbox - labeled "I agree to the Privacy Policy" - for confirmation.

b) Why is it important?

Your information shows what happens to data along with who needs permission, keeping user rights safe.

Question 5: Plain-Text Password Storage
a) What is plain-text password storage?

Type-in passwords saved just like you wrote them - no hashing or encryption involved.

b) One risk of storing passwords this way is

A hacked database might let thieves access every password stored inside it. Those stolen logins could be copied later into different accounts too.

Question 6: Improving the Form (3 improvements)

Set firm password rules while asking users to enter password twice for matching checks.

Add validation plus straightforward error messages - email format, age range, required fields need checks.

Add privacy policy + consent checkbox.