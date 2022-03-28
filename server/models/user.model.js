const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Username is required"],
    },
    lastName: {
      type: String,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters"],
    },
  },
  { timestamps: true }
);

UserSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

UserSchema.pre("validate", function (next) {
  console.log(" in validate");

  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Passwords must match!");
  }
  next();
});

UserSchema.pre("save", function (next) {
  console.log("in pre save");

  bcrypt.hash(this.password, 10).then((hashedPassword) => {
    console.log("in the hash");
    this.password = hashedPassword;
    next();
  });
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
