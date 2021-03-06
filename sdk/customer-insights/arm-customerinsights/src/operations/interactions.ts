/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/interactionsMappers";
import * as Parameters from "../models/parameters";
import { CustomerInsightsManagementClientContext } from "../customerInsightsManagementClientContext";

/** Class representing a Interactions. */
export class Interactions {
  private readonly client: CustomerInsightsManagementClientContext;

  /**
   * Create a Interactions.
   * @param {CustomerInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: CustomerInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates an interaction or updates an existing interaction within a hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param interactionName The name of the interaction.
   * @param parameters Parameters supplied to the CreateOrUpdate Interaction operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.InteractionsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, hubName: string, interactionName: string, parameters: Models.InteractionResourceFormat, options?: msRest.RequestOptionsBase): Promise<Models.InteractionsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,hubName,interactionName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.InteractionsCreateOrUpdateResponse>;
  }

  /**
   * Gets information about the specified interaction.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param interactionName The name of the interaction.
   * @param [options] The optional parameters
   * @returns Promise<Models.InteractionsGetResponse>
   */
  get(resourceGroupName: string, hubName: string, interactionName: string, options?: Models.InteractionsGetOptionalParams): Promise<Models.InteractionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param interactionName The name of the interaction.
   * @param callback The callback
   */
  get(resourceGroupName: string, hubName: string, interactionName: string, callback: msRest.ServiceCallback<Models.InteractionResourceFormat>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param interactionName The name of the interaction.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, hubName: string, interactionName: string, options: Models.InteractionsGetOptionalParams, callback: msRest.ServiceCallback<Models.InteractionResourceFormat>): void;
  get(resourceGroupName: string, hubName: string, interactionName: string, options?: Models.InteractionsGetOptionalParams | msRest.ServiceCallback<Models.InteractionResourceFormat>, callback?: msRest.ServiceCallback<Models.InteractionResourceFormat>): Promise<Models.InteractionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hubName,
        interactionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.InteractionsGetResponse>;
  }

  /**
   * Gets all interactions in the hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param [options] The optional parameters
   * @returns Promise<Models.InteractionsListByHubResponse>
   */
  listByHub(resourceGroupName: string, hubName: string, options?: Models.InteractionsListByHubOptionalParams): Promise<Models.InteractionsListByHubResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param callback The callback
   */
  listByHub(resourceGroupName: string, hubName: string, callback: msRest.ServiceCallback<Models.InteractionListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByHub(resourceGroupName: string, hubName: string, options: Models.InteractionsListByHubOptionalParams, callback: msRest.ServiceCallback<Models.InteractionListResult>): void;
  listByHub(resourceGroupName: string, hubName: string, options?: Models.InteractionsListByHubOptionalParams | msRest.ServiceCallback<Models.InteractionListResult>, callback?: msRest.ServiceCallback<Models.InteractionListResult>): Promise<Models.InteractionsListByHubResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hubName,
        options
      },
      listByHubOperationSpec,
      callback) as Promise<Models.InteractionsListByHubResponse>;
  }

  /**
   * Suggests relationships to create relationship links.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param interactionName The name of the interaction.
   * @param [options] The optional parameters
   * @returns Promise<Models.InteractionsSuggestRelationshipLinksResponse>
   */
  suggestRelationshipLinks(resourceGroupName: string, hubName: string, interactionName: string, options?: msRest.RequestOptionsBase): Promise<Models.InteractionsSuggestRelationshipLinksResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param interactionName The name of the interaction.
   * @param callback The callback
   */
  suggestRelationshipLinks(resourceGroupName: string, hubName: string, interactionName: string, callback: msRest.ServiceCallback<Models.SuggestRelationshipLinksResponse>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param interactionName The name of the interaction.
   * @param options The optional parameters
   * @param callback The callback
   */
  suggestRelationshipLinks(resourceGroupName: string, hubName: string, interactionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SuggestRelationshipLinksResponse>): void;
  suggestRelationshipLinks(resourceGroupName: string, hubName: string, interactionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SuggestRelationshipLinksResponse>, callback?: msRest.ServiceCallback<Models.SuggestRelationshipLinksResponse>): Promise<Models.InteractionsSuggestRelationshipLinksResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hubName,
        interactionName,
        options
      },
      suggestRelationshipLinksOperationSpec,
      callback) as Promise<Models.InteractionsSuggestRelationshipLinksResponse>;
  }

  /**
   * Creates an interaction or updates an existing interaction within a hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param interactionName The name of the interaction.
   * @param parameters Parameters supplied to the CreateOrUpdate Interaction operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, hubName: string, interactionName: string, parameters: Models.InteractionResourceFormat, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        hubName,
        interactionName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Gets all interactions in the hub.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.InteractionsListByHubNextResponse>
   */
  listByHubNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.InteractionsListByHubNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByHubNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.InteractionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByHubNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InteractionListResult>): void;
  listByHubNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.InteractionListResult>, callback?: msRest.ServiceCallback<Models.InteractionListResult>): Promise<Models.InteractionsListByHubNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByHubNextOperationSpec,
      callback) as Promise<Models.InteractionsListByHubNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/interactions/{interactionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.interactionName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.localeCode,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InteractionResourceFormat
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByHubOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/interactions",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.localeCode,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InteractionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const suggestRelationshipLinksOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/interactions/{interactionName}/suggestRelationshipLinks",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.interactionName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SuggestRelationshipLinksResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/interactions/{interactionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.interactionName0,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.InteractionResourceFormat,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.InteractionResourceFormat
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByHubNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InteractionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
