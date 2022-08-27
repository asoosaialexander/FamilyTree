﻿// <auto-generated />
using System;
using FamilyTreeApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace FamilyTreeApi.Migrations
{
    [DbContext(typeof(FamilyTreeContext))]
    partial class FamilyTreeContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("FamilyTreeApi.Models.Person", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("BirthYear")
                        .HasColumnType("int");

                    b.Property<int?>("FatherId")
                        .HasColumnType("int");

                    b.Property<string>("Gender")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int>("IsAlive")
                        .HasColumnType("int");

                    b.Property<string>("MaritalStatus")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int?>("MotherId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Occupation")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Photo")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Residence")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("Id");

                    b.ToTable("Person");
                });

            modelBuilder.Entity("FamilyTreeApi.Models.Spouse", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("HusbandId")
                        .HasColumnType("int");

                    b.Property<int>("WifeId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Spouse");
                });
#pragma warning restore 612, 618
        }
    }
}