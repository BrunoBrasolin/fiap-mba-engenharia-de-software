provider "aws" {
    region = "us-east-1"
}

module "module_count" {
    qtd = 1
    source = "./count"
}