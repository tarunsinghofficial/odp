import { Account, Client, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6489554e73fe89b419ba');

export const accounts = new Account(client)

export const databases = new Databases(client, "6489559f6c9337bce433")