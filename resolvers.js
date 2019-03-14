const db = require('./db')
const Query = {
   greeting:() => {
      return "hello from  TutorialsPoint !!!"
   },
   students:() => db.students.list(),
   colleges:() => db.colleges.list(),
   sayHello:(root,args,context,info) => {
    return db.students.create({collegeId:args.collegeId,
    firstName:args.firstName,
    lastName:args.lastName})
 },
   studentById:(root,args,context,info) => {
    //args will contain parameter passed in query
    return db.students.get(args.id);
 }
}

const Mutation = {
    addStudent_returns_object:(root,args,context,info) => {
        const id = db.students.create({
           collegeId:args.collegeId,
           firstName:args.firstName,
           lastName:args.lastName
        })
  
        return db.students.get(id)
     },
    createStudent:(root,args,context,info) => {
       return db.students.create({collegeId:args.collegeId,
       firstName:args.firstName,
       lastName:args.lastName})
    }
 }
const Student = {
    fullName:(root,args,context,info) => {
        console.log(root)
       return root.firstName+":"+root.lastName
    },
    college:(root) => {
        return db.colleges.get(root.collegeId);
     }
 }
 
module.exports = {Query, Student, Mutation}