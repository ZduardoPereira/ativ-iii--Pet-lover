import Cliente from "../modelo/cliente";
import cpf from "../modelo/cpf";
import pet from "../modelo/pet";
import Pet from "../modelo/pet";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Listagem from "../negocio/listagem";

const listagemClientes = [];

const rg1 = new RG("123456789", new Date(1997, 2, 11));
const cpf1 = new cpf("12345678901", new Date(1997, 2, 11));
const cliente1 = new Cliente("Alice Silva", "Ally", cpf1, [rg1], [
    new Telefone("11", "912345678"),
    new Telefone("11", "987654321"),
]);
const petCliente1_1 = new Pet("Buddy", "Labrador", "Macho", "Cachorro");
const petCliente1_2 = new Pet("Mittens", "Siamês", "Fêmea", "Gato");
cliente1.adicionarPet(petCliente1_1);
cliente1.adicionarPet(petCliente1_2);

const rg2 = new RG("234567890", new Date(1982, 9, 3));
const cpf2 = new cpf("23456789012", new Date(1982, 9, 3));
const cliente2 = new Cliente("Bruno Almeida", "Bruno", cpf2, [rg2], [
    new Telefone("12", "9987654321")
]);
const petCliente2_1 = new Pet("Max", "Beagle", "Macho", "Cachorro");
cliente2.adicionarPet(petCliente2_1);

const rg3 = new RG("345678901", new Date(1982, 9, 3));
const cpf3 = new cpf("34567890123", new Date(1982, 9, 3));
const cliente3 = new Cliente("Carla Souza", "Carla", cpf3, [rg3], [
    new Telefone("13", "9987654320")
]);
const petCliente3_1 = new Pet("Bella", "Poodle", "Fêmea", "Cachorro");
cliente3.adicionarPet(petCliente3_1);

const rg4 = new RG("456789012", new Date(1973, 6, 12));
const cpf4 = new cpf("45678901234", new Date(1973, 6, 12));
const cliente4 = new Cliente("Diego Costa", "Diego", cpf4, [rg4], [
    new Telefone("12", "9987654322")
]);
const petCliente4_1 = new Pet("Charlie", "Bulldog", "Macho", "Cachorro");
cliente4.adicionarPet(petCliente4_1);

const rg5 = new RG("567890123", new Date(1969, 12, 2));
const cpf5 = new cpf("56789012345", new Date(1969, 12, 2));
const cliente5 = new Cliente("Eduarda Fernandes", "Duda", cpf5, [rg5], [
    new Telefone("12", "9987654323")
]);
const petCliente5_1 = new Pet("Lucy", "Golden Retriever", "Fêmea", "Cachorro");
cliente5.adicionarPet(petCliente5_1);

const rg6 = new RG("678901234", new Date(1994, 11, 11));
const cpf6 = new cpf("67890123456", new Date(1994, 11, 11));
const cliente6 = new Cliente("Felipe Santos", "Felipe", cpf6, [rg6], [
    new Telefone("12", "9987654324"),
    new Telefone("12", "997324226")
]);
const petCliente6_1 = new Pet("Simba", "Vira-lata", "Macho", "Cachorro");
const petCliente6_2 = new Pet("Nala", "Shih Tzu", "Fêmea", "Cachorro");
cliente6.adicionarPet(petCliente6_1);
cliente6.adicionarPet(petCliente6_2);

const rg7 = new RG("789012345", new Date(1988, 6, 10));
const cpf7 = new cpf("78901234567", new Date(1988, 6, 10));
const cliente7 = new Cliente("Gabriela Souza", "Gabi", cpf7, [rg7], [
    new Telefone("12", "9987654325")
]);
const petCliente7_1 = new Pet("Oscar", "Persa", "Macho", "Gato");
cliente7.adicionarPet(petCliente7_1);

const rg8 = new RG("890123456", new Date(1988, 7, 9));
const cpf8 = new cpf("89012345678", new Date(1988, 7, 9));
const cliente8 = new Cliente("Hugo Silva", "Hugo", cpf8, [rg8], [
    new Telefone("12", "9987654326")
]);
const petCliente8_1 = new Pet("Molly", "Sphynx", "Fêmea", "Gato");
cliente8.adicionarPet(petCliente8_1);

const rg9 = new RG("901234567", new Date(1985, 2, 5));
const cpf9 = new cpf("90123456789", new Date(1985, 2, 5));
const cliente9 = new Cliente("Isabel Costa", "Isa", cpf9, [rg9], [
    new Telefone("12", "9987654327")
]);
const petCliente9_1 = new Pet("Shadow", "Mastim Tibetano", "Macho", "Cachorro");
cliente9.adicionarPet(petCliente9_1);
const petCliente9_2 = new Pet("Luna", "Mastim Tibetano", "Fêmea", "Cachorro");
cliente9.adicionarPet(petCliente9_2);
const petCliente9_3 = new Pet("Thor", "Mastim Tibetano", "Macho", "Cachorro");
cliente9.adicionarPet(petCliente9_3);

const rg10 = new RG("012345678", new Date(1992, 2, 5));
const cpf10 = new cpf("01234567890", new Date(1992, 2, 5));
const cliente10 = new Cliente("Joana Martins", "Jo", cpf10, [rg10], [
    new Telefone("12", "9987654328")
]);
const petCliente10_1 = new Pet("Bruno", "Pitbull", "Macho", "Cachorro");
cliente10.adicionarPet(petCliente10_1);

const rg11 = new RG("111213141", new Date(1987, 6, 27));
const cpf11 = new cpf("11121314151", new Date(1987, 6, 27));
const cliente11 = new Cliente("Lucas Ferreira", "Lucas", cpf11, [rg11], [
    new Telefone("12", "9987654329")
]);
const petCliente11_1 = new Pet("Rex", "Border Collie", "Macho", "Cachorro");
cliente11.adicionarPet(petCliente11_1);
const petCliente11_2 = new Pet("Bella", "Border Collie", "Fêmea", "Cachorro");
cliente11.adicionarPet(petCliente11_2);

const rg12 = new RG("121314151", new Date(1987, 6, 27));
const cpf12 = new cpf("12131415161", new Date(1987, 6, 27));
const cliente12 = new Cliente("Mariana Silva", "Mari", cpf12, [rg12], [
    new Telefone("12", "9987654330")
]);
const petCliente12_1 = new Pet("Caramelo", "Vira-lata", "Macho", "Cachorro");
cliente12.adicionarPet(petCliente12_1);

const rg13 = new RG("131415161", new Date(2004, 8, 13));
const cpf13 = new cpf("13141516171", new Date(2004, 8, 13));
const cliente13 = new Cliente("Nicolas Oliveira", "Nick", cpf13, [rg13], [
    new Telefone("12", "988243129")
]);
const petCliente13_1 = new Pet("Snowball", "Vira-lata", "Fêmea", "Gato");
cliente13.adicionarPet(petCliente13_1);
const petCliente13_2 = new Pet("Tiger", "Vira-lata", "Macho", "Gato");
cliente13.adicionarPet(petCliente13_2);

const rg14 = new RG("141516171", new Date(2006, 8, 26));
const cpf14 = new cpf("14151617181", new Date(2006, 8, 26));
const cliente14 = new Cliente("Olivia Costa", "Olivia", cpf14, [rg14], [
    new Telefone("12", "996305436")
]);
const petCliente14_1 = new Pet("Twix", "Dachshund", "Fêmea", "Cachorro");
cliente14.adicionarPet(petCliente14_1);

const rg15 = new RG("151617181", new Date(2004, 9, 19));
const cpf15 = new cpf("15161718191", new Date(2004, 9, 19));
const cliente15 = new Cliente("Pedro Oliveira", "Pedro", cpf15, [rg15], [
    new Telefone("12", "988457952")
]);
const petCliente15_1 = new Pet("Nemo", "Peixe-palhaço", "Macho", "Peixe");
cliente15.adicionarPet(petCliente15_1);

const rg16 = new RG("161718191", new Date(2005, 9, 27));
const cpf16 = new cpf("16171819101", new Date(2005, 9, 27));
const cliente16 = new Cliente("Quirino Rocha", "Quirino", cpf16, [rg16], [
    new Telefone("12", "991059434")
]);
const petCliente16_1 = new Pet("Coco", "Porquinho-da-índia", "Macho", "Porquinho-da-índia");
const petCliente16_2 = new Pet("Bella", "Snowshoe", "Fêmea", "Gato");
cliente16.adicionarPet(petCliente16_1);
cliente16.adicionarPet(petCliente16_2);

const rg17 = new RG("171819202", new Date(2005, 2, 12));
const cpf17 = new cpf("17181920212", new Date(2005, 2, 12));
const cliente17 = new Cliente("Rafaela Lima", "Rafa", cpf17, [rg17], [
    new Telefone("12", "982837386")
]);
const petCliente17_1 = new Pet("Milo", "Vira-lata", "Macho", "Gato");
cliente17.adicionarPet(petCliente17_1);

const rg18 = new RG("181920213", new Date(2003, 11, 20));
const cpf18 = new cpf("18192021322", new Date(2003, 11, 20));
const cliente18 = new Cliente("Thiago Carvalho", "Thi", cpf18, [rg18], [
    new Telefone("12", "997584865"),
]);
const petCliente18_1 = new Pet("Rex", "Dachshund", "Macho", "Cachorro");
cliente18.adicionarPet(petCliente18_1);

const rg19 = new RG("192021324", new Date(2003, 12, 12));
const cpf19 = new cpf("19202132433", new Date(2003, 12, 12));
const cliente19 = new Cliente("Victoria Gomes", "Vicky", cpf19, [rg19], [
    new Telefone("12", "991017404")
]);
const petCliente19_1 = new Pet("Simba", "Siamês", "Macho", "Gato");
cliente19.adicionarPet(petCliente19_1);

const rg20_1 = new RG("202122435", new Date(2004, 11, 13));
const rg20_2 = new RG("202122436", new Date(2004, 11, 13));
const cpf20 = new cpf("20212243567", new Date(2004, 11, 13));
const cliente20 = new Cliente("William Fernandes", "Will", cpf20, [rg20_1, rg20_2], [
    new Telefone("12", "997351963")
]);

const petCliente20_1 = new Pet("Daisy", "Dachshund", "Fêmea", "Cachorro");
cliente20.adicionarPet(petCliente20_1);
listagemClientes.push(
    cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8, cliente9, cliente10,
    cliente11, cliente12, cliente13, cliente14, cliente15, cliente16, cliente17, cliente18, cliente19, cliente20
);

export default listagemClientes;
