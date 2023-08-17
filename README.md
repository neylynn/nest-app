# install dependencies
npm install

# create .env file in project's root folder
insert one lin in .env file => DATABASE_URL="postgresql://postgres:postgres@localhost:5432/db_name?schema=public"

# prisma migrate
npx prisma migrate deploy

# database seeding
npx prisma db seed

# launch prisma studio 
npx prisma studio

# lunch the server
npm run start

# application url
localhost:3000/api