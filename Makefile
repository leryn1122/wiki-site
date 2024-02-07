# Project
SHELL := /bin/bash
PROJECT := wiki-site
VERSION := 0.1.0
BUILD_DATE := $(shell date +%Y%m%d)
GIT_VERSION := $(shell git describe --long --all 2>/dev/null)
SHA := $(shell git rev-parse --short=8 HEAD 2>/dev/null)

# Toolchain
NPM := pnpm

# Main

# Docker
DOCKER := podman
DOCKER_CONTEXT := .
DOCKERFILE := ci/docker/Dockerfile
REGISTRY := harbor.leryn.top
IMAGE_NAME := library/$(PROJECT)
FULL_IMAGE_NAME = $(REGISTRY)/$(IMAGE_NAME):$(VERSION)
NIGHTLY_IMAGE_NAME = $(REGISTRY)/$(IMAGE_NAME):nightly

##@ General

.PHONY: help
help: ## Print help info
	@ awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_0-9-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

##@ Development

.PHONY: install
install: ## Install dependencies
	$(NPM) install

.PHONY: check
check: ## Check
	$(NPM) typecheck

.PHONY: format
format: ## Format against code
	@ echo "Unsupported"

.PHONY: clean
clean: ## Clean target artifact
	$(NPM) clean

.PHONY: unittest
unittest: ## Run all unit tests
	@ echo "Unsupported"

.PHONY: test
test: ## Run all integrity tests
	@ echo "Unsupported"

##@ Build
.PHONY: build
build: ## Run the target artifact
	$(NPM) build --out-dir dist

.PHONY: image
image: ## Build the OCI image
	DOCKER_BUILDKIT=1 $(DOCKER) build \
	  -t $(NIGHTLY_IMAGE_NAME) \
	  -f $(DOCKERFILE) \
	  $(DOCKER_CONTEXT)
	$(DOCKER) tag $(NIGHTLY_IMAGE_NAME) $(FULL_IMAGE_NAME)
