-- CreateTable
CREATE TABLE "User" (
    "userid" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "Conversation" (
    "conversation_id" SERIAL NOT NULL,
    "sender_id" INTEGER NOT NULL,
    "receiver_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Conversation_pkey" PRIMARY KEY ("conversation_id")
);

-- CreateTable
CREATE TABLE "Particepent" (
    "particepent_id" SERIAL NOT NULL,
    "conversation" INTEGER NOT NULL,
    "user" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Particepent_pkey" PRIMARY KEY ("particepent_id")
);

-- CreateTable
CREATE TABLE "Messages" (
    "message_id" SERIAL NOT NULL,
    "conversation" INTEGER NOT NULL,
    "sender_id" INTEGER NOT NULL,
    "receiver_id" INTEGER NOT NULL,
    "message" VARCHAR(2500) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Messages_pkey" PRIMARY KEY ("message_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Conversation_conversation_id_key" ON "Conversation"("conversation_id");

-- AddForeignKey
ALTER TABLE "Particepent" ADD CONSTRAINT "Particepent_conversation_fkey" FOREIGN KEY ("conversation") REFERENCES "Conversation"("conversation_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Particepent" ADD CONSTRAINT "Particepent_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_conversation_fkey" FOREIGN KEY ("conversation") REFERENCES "Conversation"("conversation_id") ON DELETE RESTRICT ON UPDATE CASCADE;
